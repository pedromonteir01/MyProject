'use client';
import { useEffect, useState, CSSProperties } from "react";
import { Audio } from  'react-loader-spinner'
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import agents from "@/data/agents";
import styles from '@/app/test/test.module.css'
import Card from "../components/cardTest/CardTest";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Test() {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    const [language, setlanguage] = useState('pt-BR');
    const [dadosAPI, setDadosAPI] = useState(null);

    useEffect(() => {
        const agentsFetch = async () => {
            try {
                const dados = await agents();
                setDadosAPI(dados)
                console.log(dados);
            } catch (error) {
                throw error;
            }
        };
        agentsFetch();
    }, []);

    useEffect(() => {

    })

    const changeLanguage = () => {
        setlanguage(prev => prev == 'pt-BR' ? 'en-US' : 'pt-BR');
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.card}>
                    {
                        dadosAPI ? (
                            dadosAPI.data.map((agent) => (
                                <Card key={agent.uuid} agentName={agent.displayName} agentPhoto={agent.fullPortrait} agentDescription={agent.description} abilities={agent.abilities} />
                            ))

                        ) : (
                            <Audio
                                height="80"
                                width="80"
                                radius="9"
                                color='red'
                                ariaLabel='three-dots-loading'
                                wrapperStyle
                                wrapperClass
                            />
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Test;