import { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';
import { useSectionText } from '@/hooks/use-section-text';
import { TEXT } from '@/constants/sectionText';
const Section3 = () => {
  const [recordMap, setRecordMap] = useState(null);
  const { notionPageId } = useSectionText({ TEXT });
  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${notionPageId}`)
      .then(res => res.json())
      .then(resJson => {
        setRecordMap(resJson);
      });
  }, [notionPageId]);
  return (
    <div style={{ position: 'relative', zIndex: 2, backgroundColor: 'white' }}>
      {recordMap && <NotionRenderer blockMap={recordMap} fullPage={true} />}
      {/* <Spacing size={2000} /> */}
    </div>
  );
};

export default Section3;
