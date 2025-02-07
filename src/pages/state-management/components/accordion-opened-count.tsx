import { tm } from "@/utils/tw-merge";

interface AccordionOpenedCountProps { children: React.ReactNode }

function AccordionOpenedCount({ children }: AccordionOpenedCountProps) {
  return (
		<output
		  className={tm(
		    'fixed left-1/2 -top-8 -translate-x-1/2',
		    'text-4xl font-semibold text-black/70'
		  )}
		>
      {children}
    </output>
  );
}

export default AccordionOpenedCount;