import { USER_PROFILE } from '@/constants/useProfile';

import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import opacityStore from '@/store/opacityStore';
const Section3 = observer(() => {
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
    <div style={{ position: 'relative', zIndex: 2, right: 0 }}>
      {recordMap && (
        <div style={{ position: 'fixed', top: 0, left: 0, backgroundColor: 'white', opacity: opacityStore.opacity }}>
          <NotionRenderer recordMap={recordMap} fullPage={true} />
        </div>
      )}
    </div>
  );
});
//mail_icon
export default Section3;
