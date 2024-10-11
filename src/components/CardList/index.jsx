'use client'
import React, { useState } from "react";
import Card from "../Card";

export default function CardList(){

    const [cards, setCards] = useState([
        {id: 1, titulo: "Ovo com arroz e pepino", imagem: 'ovo-com-pepino.png',  tempo: 25, serve: 2},
        {id: 2, titulo: "Ovo mexido",             imagem: 'ovo-com-pepino.png', tempo: 20, serve: 2},
        {id: 3, titulo: "Ovo com macarrão",      imagem: 'ovo-com-pepino.png', tempo: 15, serve: 1},
        {id: 4, titulo: "Pão com ovo",            imagem: 'ovo-com-pepino.png', tempo: 10, serve: 1},
    ]);

    return(
        <div className="flex flex-wrap flex-col m-8">
            <div>Quantidade de receitas: {cards.length}</div>
            <div className="flex flex-wrap">
                {cards.map((c, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Card
                        key={c.id}
                        imagem={c.imagem}
                        titulo={c.titulo}
                        tempo={c.tempo}
                        serve={c.serve}
                    />

                ))}
            </div>
        </div>
    )
}