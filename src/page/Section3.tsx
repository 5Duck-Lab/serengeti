import { USER_PROFILE } from '@/constants/useProfile';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
const Section3 = () => {
  const { notionPageId } = USER_PROFILE;

  const [recordMap, setRecordMap] = useState<ExtendedRecordMap | null>(null);
  useEffect(() => {
    axios
      .get('https://serengeti-server.onrender.com/api/notion', {
        params: {
          pageId: notionPageId,
        },
      })
      .then(response => {
        // 응답 처리
        setRecordMap(response.data);
      })

      .catch(error => {
        console.error(error);
        // 에러 처리
      });
  }, [notionPageId]);
  return (
    <div style={{ position: 'relative', zIndex: 2, backgroundColor: 'white' }}>
      {recordMap && <NotionRenderer recordMap={recordMap} fullPage={true} />}
      {/* <Spacing size={2000} /> */}
    </div>
  );
};

export default Section3;
