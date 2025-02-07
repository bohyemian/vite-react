import { tm } from "@/utils/tw-merge";
import { useState } from "react";

export interface AccordionItemType {
  id: string;
  title: string;
  open: boolean;
  children: React.ReactNode;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  onUpdate?: (isOpen: boolean) => void;
}

function AccordionItem({
  title,
  children,
  open = false,
  onUpdate, // onSubscribe
}: AccordionItemProps) {

  const [isVisible, setIsVisible] = useState(open);

  const handleToggle = () => {
    const nextVisible = !isVisible;
    setIsVisible(nextVisible);
    onUpdate?.(nextVisible);
  };

  return (
    <div className="flex flex-col space-y-2 mt-4 relative">
      <button
        type="button"
        className="text-lg font-semibold cursor-pointer"
        onClick={handleToggle}
      >
        {title}
      </button>
      <div
        className={tm(
          { hidden: !isVisible },
          '*:text-sm *:mb-2 *:transition-all',
          'transition-all duration-300 transition-discrete delay-100',
          'opacity-0 h-0 -translate-y-5',
          'starting:opacity-0 starting:h-0 starting:-translate-y-5',
          { 'opacity-100 h-30 translate-y-0': isVisible }
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default AccordionItem;