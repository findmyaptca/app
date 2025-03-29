import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ChatBot.scss";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot">
      <motion.button
        className="chatbot__toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="chatbot__toggle-icon">{isOpen ? "×" : "?"}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot__window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="chatbot__header">
              <h3>Need Help?</h3>
            </div>
            <div className="chatbot__messages">
              {/* Chat messages will go here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
