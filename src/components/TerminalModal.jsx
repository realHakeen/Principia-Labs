import React, { useState } from 'react';
import { X, Terminal } from 'lucide-react';
import emailjs from '@emailjs/browser';

const TerminalModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    telegram: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  // Constants - User provided
  const SERVICE_ID = 'service_fqn5bcw';
  const PUBLIC_KEY = 'rW0ghILhs2MRnNDuo';
  const TEMPLATE_ID = 'template_yzvv65e';

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
        if (TEMPLATE_ID === 'template_placeholder') {
             // Mock send if no template ID
             await new Promise(resolve => setTimeout(resolve, 2000));
             console.log("Mock Email Sent:", { ...formData, current_date: new Date().toLocaleString() });
        } else {
             await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                from_email: formData.email,
                telegram_id: formData.telegram,
                message: formData.message,
                current_date: new Date().toLocaleString()
             }, PUBLIC_KEY);
        }
        
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ email: '', telegram: '', message: '' });
        }, 2000);
    } catch (error) {
        console.error('Email Error:', error);
        setStatus('error');
        setErrorMessage('TRANSMISSION FAILED. CHECK NETWORK CONNECTION.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-black border border-green-500/30 shadow-[0_0_30px_rgba(0,255,0,0.1)] font-mono text-sm md:text-base overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-green-900/10 border-b border-green-500/20 p-3 flex justify-between items-center text-green-500">
          <div className="flex items-center gap-2">
            <Terminal size={14} />
            <span className="tracking-widest text-xs">SECURE_UPLINK_V1.0</span>
          </div>
          <button onClick={onClose} className="hover:text-green-300 transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {status === 'success' ? (
            <div className="text-green-500 text-center py-10 space-y-4 animate-pulse">
              <div className="text-4xl">✓</div>
              <div>> UPLOAD COMPLETE</div>
              <div className="text-xs opacity-70">CLOSING CONNECTION...</div>
            </div>
          ) : (
            <>
              <div className="mb-6 text-green-500/70 text-xs md:text-sm">
                <p>> INITIATING ENCRYPTED HANDSHAKE...</p>
                <p>> CONNECTION ESTABLISHED.</p>
                <p className="mt-2 text-white">> PLEASE ENTER YOUR CREDENTIALS:</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] text-green-500/60 uppercase mb-1 tracking-wider">> EMAIL_IDENTITY</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-green-900/5 border border-green-500/30 text-green-400 p-3 outline-none focus:border-green-500 focus:bg-green-900/10 transition-all placeholder-green-800/50"
                    placeholder="name@principia.labs"
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-green-500/60 uppercase mb-1 tracking-wider">> COMMS_CHANNEL (TELEGRAM / X)</label>
                  <input
                    type="text"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="w-full bg-green-900/5 border border-green-500/30 text-green-400 p-3 outline-none focus:border-green-500 focus:bg-green-900/10 transition-all placeholder-green-800/50"
                    placeholder="@username"
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-green-500/60 uppercase mb-1 tracking-wider">> MISSION_OBJECTIVE</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-green-900/5 border border-green-500/30 text-green-400 p-3 outline-none focus:border-green-500 focus:bg-green-900/10 transition-all placeholder-green-800/50 resize-none"
                    placeholder="Describe your request..."
                    disabled={status === 'sending'}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="text-red-500 text-xs border border-red-900/50 bg-red-900/10 p-2">
                    > ERROR: {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-green-900/20 border border-green-500/50 text-green-400 py-3 font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      > INITIATE_UPLOAD
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-2 border-t border-green-500/20 text-[10px] text-green-500/40 text-center uppercase">
            Principia Labs Encrypted Protocol
        </div>
      </div>
    </div>
  );
};

export default TerminalModal;
