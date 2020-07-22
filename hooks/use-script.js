import { useEffect } from 'react';

const importScript = resourceUrl => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    script.id = 'mcjs'
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }

  }, [resourceUrl]);
};

export default importScript;
