import React, { useState, useEffect, useRef } from 'react';

import { Conteudo, Header, Messenger, Text, Footer } from './styles';
import { Form, Input } from '@rocketseat/unform';

import json from '~/services/chats.json';

import Lottie from 'lottie-react-web';

import { Scrollbars } from 'react-custom-scrollbars';

import { MdSend, MdAttachFile } from 'react-icons/md';
import Icon from '@material-ui/core/Icon';

import logo from '~/assets/fabiomoraes.jpg';
import semavatar from '~/assets/semavatar.jpg';

import animation from '~/assets/6541-loading.json';

export default function Index() {
  const [user, setUser] = useState(json.user);
  const [etapa, setEtapa] = useState('');
  const [page, setPage] = useState('');
  const [messegers, setMessegers] = useState([]);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  function start() {
    const mensagem = json.start;
    const reverse = false;
    const menu = [];

    const setDados = { mensagem, reverse, menu };

    const object = { setDados };

    const convert = Object.values(object);

    setLoading(false);
    setMessegers(convert);
  }

  function chatbot(data) {
    const chats = page ? json.data.find(item => item.etapa === page) :
    json.data.find(item => item.etapa === etapa);

    if (chats.permission) {
      const number = isNaN(data.mensagem);

      if (chats.permission.tipo === "number" && number) {
        const mensagem = chats.permission.error;
        const reverse = chats.reverse;
        const menu = chats.menu;

        const setDados = { mensagem, reverse, menu };

        const convert = Object.values({ data, setDados });

        const array = messegers.concat(convert);
        setMessegers(array);
        setLoading(false);

        return;
      }
    }

    if (chats.save) {
      const dados = {
        ...user,
        name: chats.save === 'name' ? chats.mensagem : user.name,
        idade: chats.save === 'idade' ? chats.mensagem : user.idade,
        telefone: chats.save === 'telefone' ? chats.mensagem : user.telefone,
      };
      setUser(dados);
    }

    if (chats.mensagem) {
      const mensagem =
            chats.text ?
              `${chats.mensagem} ${data.mensagem}.` : chats.mensagem;
      const reverse = chats.reverse;
      const menu = chats.menu;

      const setDados = { mensagem, reverse, menu };

      const convert = page ? Object.values({ setDados }) :
      Object.values({ data, setDados });

      const array = messegers.concat(convert);
      setMessegers(array);

      setLoading(false);
    }

    if (page) {
      setPage('');
    }

    if (chats.question) {
      setEtapa(chats.question);
    }

    if (chats.go) {
      setPage(chats.go);
    }

    setLoading(false);
  }

  const sendBtn = data => {
    const mensagem = data.text;
    const reverse = data.reverse;
    const menu = [];

    document.getElementById('form_reset').reset();

    const setDados = { mensagem, reverse, menu };
    const object = { setDados };
    const convert = Object.values(object); // Transforma objeto em array

    const messengerGeral = messegers.concat(convert);

    setMessegers(messengerGeral);

    setLoading(true);
    setTimeout(() => {
      chatbot(setDados);
    }, json.time);
  };

  const btnClick = data => {
    const mensagem = data.text;
    const reverse = true;
    const menu = [];

    document.getElementById('form_reset').reset();

    const setDados = { mensagem, reverse, menu };
    const object = { setDados };
    const convert = Object.values(object); // Transforma objeto em array

    const messengerGeral = messegers.concat(convert);

    setMessegers(messengerGeral);

    setLoading(true);
    setTimeout(() => {
      setPage(data.goClick);
    }, json.time);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messegers]);

  useEffect(() => {
    setEtapa('welcome');
    setTimeout(start, json.time);
  }, []);

  useEffect(() => {
    if (page) {
      setLoading(true);
      setTimeout(chatbot, json.time);
    }
  }, [page]);

  return (
    <>
    <Header color={json.header}>
      {json.name}
    </Header>
    <Conteudo>
      <Scrollbars autoHide className="scrollbar" style={{ height: '100%' }}>
        {messegers.map(item => (
          <Messenger reverse={item.reverse}>
            <div>
              <img src={item.reverse ? semavatar : logo} alt={json.name} />
              <Text
                reverse={item.reverse}
                fontSize={json.fontSize}
                color={json.header}
              >
                <p>{item.mensagem}</p>

                {item.menu.length > 0 && (
                  <>
                    {item.menu.map(elem => (
                      <ul>
                        <li>
                          <button
                            type="button"
                            onClick={() => btnClick({
                              text: elem.title,
                              goClick: elem.goClick
                            })}
                          >
                            {elem.icone && (
                              <Icon style={{ fontSize: `${json.fontSize}` }}>
                                {elem.icone}
                              </Icon>
                            )}
                            {elem.title}
                          </button>
                        </li>
                    </ul>
                    ))}
                  </>
                )}
              </Text>
            </div>
          </Messenger>
        ))}

        {loading && (
          <Messenger>
            <div>
              <Lottie
                options={{
                  animationData: animation,
                }}
                width={80}
              />
            </div>
          </Messenger>
        )}

          <span ref={messagesEndRef} />
      </Scrollbars>
    </Conteudo>

    <Footer color={json.header}>
    <Form onSubmit={sendBtn} id="form_reset">
        <Input type="hidden" name="reverse" value="true" />

        <button type="button" className="anexar">
          <MdAttachFile size={25} color="#fff" />
        </button>
        <Input type="text" placeholder="Escrever uma mensagem" name="text" />
        <button type="submit" className="send">
          <MdSend size={25} color="#fff" />
        </button>
      </Form>
    </Footer>
    </>
  );
}
