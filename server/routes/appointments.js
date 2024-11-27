import express from 'express';
import { auth } from '../middleware/auth.js';
import Appointment from '../models/Appointment.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Create appointment
router.post('/', auth, async (req, res) => {
  try {
    const appointment = new Appointment({
      ...req.body,
      patient: req.user.userId,
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's appointments
router.get('/my-appointments', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user.userId })
      .populate('doctor', 'name')
      .sort({ date: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update appointment status
router.patch('/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (appointment.patient.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    appointment.status = req.body.status;
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create video call room
router.post('/video-room', auth, async (req, res) => {
  try {
    const roomId = uuidv4();
    res.json({ roomId });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;