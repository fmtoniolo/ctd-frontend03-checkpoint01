import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

function ListaProvider({ children }) {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        console.log(lista)
    }, [lista])

    return (
        <Context.Provider value={{ lista, setLista }}>
            {children}
        </Context.Provider>
    )
}

const useLista = () => {
    const ctx = useContext(Context);

    if (!ctx) throw new Error("Esse hook deve ser usado dentro do context.provider!")

    return ctx;
}

export { Context, ListaProvider, useLista };