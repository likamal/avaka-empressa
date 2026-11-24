import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-[#003B00]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question} className="border-b border-[#003B00]">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full py-5 px-4 sm:px-6 flex items-center justify-between gap-4 text-left hover:bg-[#060c07] transition-colors cursor-pointer"
            >
              <span className="text-base font-medium text-white">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#00FF41] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 sm:px-6 pb-6 pt-1 text-sm text-[#b9cbbd] leading-relaxed max-w-3xl">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
