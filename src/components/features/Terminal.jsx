import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';
import { terminalCommands } from '../../data/terminalCommands.js';

export default function Terminal({ isOpen, onClose, onToggle }) {
  const [history, setHistory] = useState([
    "Sanjay V Developer Console [Version 1.0.0]",
    "Type 'help' to see available commands or 'exit' to close.",
    ""
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const availableCommands = Object.keys(terminalCommands);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdString) => {
    const trimmed = cmdString.trim();
    if (!trimmed) {
      setHistory((prev) => [...prev, "sanjay@portfolio:~$ "]);
      return;
    }

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();

    if (command === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (command === 'exit') {
      onClose();
      setInputVal('');
      return;
    }

    if (terminalCommands[command]) {
      const output = terminalCommands[command]();
      setHistory((prev) => [
        ...prev,
        `sanjay@portfolio:~$ ${trimmed}`,
        ...(Array.isArray(output) ? output : [output]),
        ""
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        `sanjay@portfolio:~$ ${trimmed}`,
        `command not found: ${command}. Type 'help' to see available commands.`,
        ""
      ]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx < cmdHistory.length) {
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = availableCommands.find((c) => c.startsWith(inputVal.toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <>
      {/* Floating Bottom-Right Terminal Launch Button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full border border-accent/40 bg-bg-elevated hover:bg-accent hover:text-bg text-accent flex items-center justify-center shadow-xl shadow-black/40 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Open developer terminal"
        title="Open Developer Terminal (Ctrl+K or click)"
      >
        <span className="font-mono text-base font-bold">&gt;_</span>
      </button>

      {/* Terminal Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 sm:inset-auto sm:bottom-20 sm:right-6 sm:w-[540px] sm:h-[440px] z-50 rounded-2xl border border-accent/40 bg-[#0B0D12]/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs text-text"
          >
            {/* Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-bg-elevated border-b border-border select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#FF5F56] hover:opacity-80 transition-opacity"
                  aria-label="Close terminal"
                />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>

              <div className="text-[11px] text-text-muted font-mono">
                sanjay@portfolio: ~ (bash)
              </div>

              <div className="flex items-center gap-1.5 text-text-muted">
                <button onClick={onClose} className="p-1 hover:text-text">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-4 overflow-y-auto space-y-1.5 leading-relaxed"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith('sanjay@portfolio:~$')
                      ? 'text-cyan-300 font-semibold'
                      : line.startsWith('[') || line.startsWith('FEATURED') || line.startsWith('CONTACT')
                      ? 'text-accent font-bold mt-1'
                      : line.includes('error') || line.includes('not found')
                      ? 'text-red-400'
                      : 'text-text-muted'
                  }
                >
                  {line}
                </div>
              ))}

              {/* Active Prompt Input */}
              <div className="flex items-center gap-2 text-cyan-300 pt-1">
                <span className="font-bold shrink-0">sanjay@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-text font-mono caret-accent text-xs p-0 m-0"
                  autoFocus
                />
              </div>

              <div ref={bottomRef} />
            </div>

            {/* Terminal Footer */}
            <div className="px-4 py-1.5 bg-bg-elevated/70 border-t border-border/80 flex items-center justify-between text-[10px] text-text-muted">
              <span>TAB autocompletes • ESC closes</span>
              <span className="text-accent">Spring Boot + React</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
