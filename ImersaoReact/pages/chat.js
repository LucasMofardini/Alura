import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useEffect, useState } from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js'

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2MTA5NiwiZXhwIjoxOTU5MjM3MDk2fQ.2RI4sZrhdeWi5VWnmvnMfwmb6O68ZTP0nh_jsyfCMRg';
const SUPABASE_URL = 'https://nnrtzcqguqdqwuzhhwmu.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const MINIMO_DE_CARACTERES_PARA_ENVIAR_MENSAGEM = 0;
const MAXIMO_DE_CARACTERES_PARA_ENVIAR_MENSAGEM = 50;



export default function ChatPage() {
    const [mensagem, setMensagem] = useState('');
    const [listaDeMensagem, setListaDeMensagens] = useState([]);
    const [colorBtnEnviar, setColorBtnEnviar] = useState(appConfig.theme.colors.primary[500]);
    useEffect(() => {
        supabaseClient
            .from('mensagens')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => {
                console.log('Dados da consulta : ', data);
                setListaDeMensagens(data);
            });

    }, []);


    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            de: 'lucasmofardini',
            texto: novaMensagem,

        };
        supabaseClient
            .from('mensagens')
            .insert([
                // Tem que ter os mesmos campos do supabase
                mensagem
            ])
            .then(({ data }) => {
                console.log(data[0])
                setListaDeMensagens([
                    data[0],
                    ...listaDeMensagem,
                ]);
            });


        setMensagem('');
    }
    function validacaoDeMensagem(mensagemParaSerValidada) {
        //Se a mensagem for maior que o minimo e menor que o maximo de caracteres  ela é valida
        if (mensagemParaSerValidada.trim().length > MINIMO_DE_CARACTERES_PARA_ENVIAR_MENSAGEM
            &&
            mensagemParaSerValidada.trim().length < MAXIMO_DE_CARACTERES_PARA_ENVIAR_MENSAGEM) {
            handleNovaMensagem(mensagem);
        } else {
            setColorBtnEnviar(appConfig.theme.colors.primary.red)
        }
    }
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://i.pinimg.com/originals/bd/8d/b6/bd8db6e6d336033e654188d56812e779.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagem} />

                    {/* {listaDeMensagem.map((mensagem) => {
                        return (
                            <li key={mensagem.id}> {mensagem.de} : {mensagem.texto}</li>
                        );
                    })} */}

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                //Se o usuario digitar mais de 50 caracteres, ele nao deixa enviar
                                if (event.target.value.trim().length <= MAXIMO_DE_CARACTERES_PARA_ENVIAR_MENSAGEM) {
                                    setMensagem(event.target.value);
                                    setColorBtnEnviar(appConfig.theme.colors.primary[500]);
                                } else {
                                    setColorBtnEnviar(appConfig.theme.colors.primary.red);
                                }
                            }
                            }
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    //Entra na funçao de validação da mensagem
                                    validacaoDeMensagem(mensagem);

                                }

                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Button
                            onClick={(event) => {
                                event.preventDefault();
                                validacaoDeMensagem(mensagem);
                            }}
                            styleSheet={{
                                fontSize: '16px'
                            }}
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: colorBtnEnviar,
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary.black,
                            }}
                            iconName='arrowRight' />

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    return (
        <Box
            tag="ul"
            id="box-mensagens"
            styleSheet={{
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
                overflowX: 'hidden',


            }}
        >

            {
                props.mensagens.map((mensagem) => {
                    return (
                        <Text
                            key={mensagem.id}
                            tag="li"
                            styleSheet={{
                                borderRadius: '5px',
                                padding: '6px',
                                marginBottom: '12px',
                                hover: {
                                    backgroundColor: appConfig.theme.colors.neutrals[700],
                                }
                            }}
                        >
                            <Box
                                styleSheet={{
                                    marginBottom: '8px',
                                    position: 'relative',

                                }}
                            >

                                <Text>
                                    <Box class="box-git-image">
                                        <Text> {mensagem.de}</Text>
                                    </Box>
                                    {/* target="_blank" href={`https://github.com/${mensagem.de}`} */}
                                    <Image
                                        id="img-github-user"
                                        styleSheet={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            display: 'inline-block',
                                            marginRight: '8px',
                                        }}
                                        src={`https://github.com/${mensagem.de}.png`}
                                    />
                                </Text>

                                <Text tag="strong">
                                    {mensagem.de}
                                </Text>
                                <Text
                                    styleSheet={{
                                        fontSize: '10px',
                                        marginLeft: '8px',
                                        color: appConfig.theme.colors.neutrals[300],
                                    }}
                                    tag="span"
                                >
                                    {(new Date().toLocaleDateString())}
                                </Text>
                            </Box>
                            {mensagem.texto}
                        </Text>
                    )
                })
            }
        </Box >
    )
}