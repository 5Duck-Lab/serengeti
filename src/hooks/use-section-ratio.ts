import React, { useState, useEffect } from 'react';

export const useSectionRatio = (
  appRef: React.RefObject<HTMLDivElement>,
  sectionRef: React.RefObject<HTMLDivElement>
): number => {
  const [sectionRatio, setSectionRatio] = useState(0);

  useEffect(() => {
    if (appRef.current && sectionRef.current) {
      const sectionHeight = sectionRef.current.offsetHeight;
      const totalHeight = appRef.current.scrollHeight;
      setSectionRatio(sectionHeight / totalHeight);
    }
  }, [appRef, sectionRef]);

  return sectionRatio;
};
