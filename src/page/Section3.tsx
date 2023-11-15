import { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';
const Section3 = () => {
  const [recordMap, setRecordMap] = useState(null);
  useEffect(() => {
    const NOTION_PAGE_ID = '43cf367fd2e1492dac4363f7ee475fce';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then(resJson => {
        setRecordMap(resJson);
      });
  }, []);
  return (
    <div style={{ position: 'relative', zIndex: 2, backgroundColor: 'white' }}>
      {recordMap && <NotionRenderer blockMap={recordMap} fullPage={true} />}
      {/* <Spacing size={2000} /> */}
    </div>
  );
};

export default Section3;
