import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Content, ContentContext } from './ContentContext';
import { AuthContext } from '../auth/AuthContext';

export function ContentProvider() {
  const [content, setContent] = useState<Content | null>(null);
  const credentials = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      baseURL: 'http://localhost:5000',
      url: '/content',
      method: 'get',
      headers: {
        Authorization: `Bearer ${credentials?.token}`,
      },
    })
      .then((res) => {
        setContent(res.data);
        navigate('/entradas');
      })
      .catch(() => {
        console.log('erro ao requerir o conteudo');
      });
  }, []);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {content ? <Outlet /> : <></>}
    </ContentContext.Provider>
  );
}
