import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiX,
  FiCalendar,
  FiClock,
  FiUser,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { options } from "../home/DiscoveryModal";

const ConsultationModal = ({ isOpen, onClose, selectedServiceId }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", notes: "" });
  
  // Find selected service info
  const selectedService = options.find(opt => opt.id === selectedServiceId);

  const form = useRef();

  // Generate calendar days
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleNext = () => {
    if (step === 1 && selectedDate) setStep(2);
    if (step === 2 && selectedTime) setStep(3);
    if (step === 3 && formData.name && formData.email) {
      setStep(4);
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1 && step < 4) setStep(step - 1);
  };

  const resetModal = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", email: "", notes: "" });
    onClose();
  };

  function handleSubmit(e) {
    let templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.notes,
      date: `${currentMonth} ${selectedDate}, ${today.getFullYear()}`,
      time: selectedTime,
      service: selectedService ? selectedService.title : "Not Specified"
    };
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY,
        }
      )
      .then(
        (resp) => {
          console.log("SUCCESS!", resp);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          onClick={resetModal}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col gap-2 p-6 border-b border-slate-800 bg-slate-900/50">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="bg-blue-500 rounded-lg p-1">
                    <FiCalendar className="w-5 h-5 text-white" />
                </span>
                Book Consultation
                </h3>
                <button
                onClick={resetModal}
                className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                <FiX className="w-5 h-5" />
                </button>
            </div>
            
            {/* Service Badge */}
            {selectedService && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="flex items-center gap-2"
                >
                    <span className="text-slate-400 text-sm">Regarding: </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                        {selectedService.icon}
                        {selectedService.title}
                    </span>
                </motion.div>
            )}
          </div>

          <div className="p-6">
            {/* Progress Bar */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    s <= step ? "bg-blue-500" : "bg-slate-800"
                  }`}
                />
              ))}
            </div>

            <div className="min-h-[300px]">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-white">
                      {currentMonth} {today.getFullYear()}
                    </h4>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-slate-800 rounded text-slate-400">
                        <FiChevronLeft />
                      </button>
                      <button className="p-1 hover:bg-slate-800 rounded text-slate-400">
                        <FiChevronRight />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center mb-2">
                    {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                      <span
                        key={d}
                        className="text-xs font-medium text-slate-500"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {days.map((day) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        disabled={day < today.getDate()}
                        className={`
                          p-2 rounded-lg text-sm font-medium transition-all
                          ${
                            day === selectedDate
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                              : day < today.getDate()
                              ? "text-slate-700 cursor-not-allowed"
                              : "text-slate-300 hover:bg-slate-800 hover:text-white"
                          }
                        `}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-6">
                    Select Time
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          p-4 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-all
                          ${
                            selectedTime === time
                              ? "border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-500/10"
                              : "border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-white"
                          }
                        `}
                      >
                        <FiClock /> {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form ref={form}>
                    <h4 className="text-lg font-semibold text-white mb-6">
                      Your Details
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">
                          Project Notes
                        </label>
                        <textarea
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData({ ...formData, notes: e.target.value })
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all"
                          placeholder="Briefly describe your requirements..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <FiCheck className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Booking Confirmed!
                  </h4>
                  <p className="text-slate-400 max-w-xs mx-auto">
                    We have scheduled your consultation for{" "}
                    <strong className="text-white">
                      {currentMonth} {selectedDate}
                    </strong>{" "}
                    at <strong className="text-white">{selectedTime}</strong>.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-between">
            {step < 4 ? (
              <>
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    step === 1
                      ? "text-slate-600 cursor-not-allowed"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedDate) ||
                    (step === 2 && !selectedTime) ||
                    (step === 3 && (!formData.name || !formData.email))
                  }
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
                >
                  {step === 3 ? "Confirm Booking" : "Next Step"}
                </button>
              </>
            ) : (
              <button
                onClick={resetModal}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ConsultationModal;
