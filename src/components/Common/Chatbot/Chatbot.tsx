import { useEffect } from 'react';
import Rhinontech from '@rhinon/botsdk';

export default function Chatbot() {
  useEffect(() => {
    Rhinontech({
      app_id: '3CQDTA'
    });
  }, []);

  return null;
}