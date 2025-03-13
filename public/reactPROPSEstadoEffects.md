# Props, Estado y useEffect

- **Cómo usar `useEffect`** para manejar efectos secundarios en React.
- **Cómo actualizar estados en función de eventos.**
- **Cómo props, estado y efectos trabajan juntos.**
- **Cómo mover la lógica a funciones separadas en eventos `onClick`.**


## **Elementos diferenciales del Proyecto**

- **React con TypeScript (`app.tsx`)**  
  - Creamos un componente `Saludo` que **recibe props** y **usa estado (`useState`)**.
  - Implementamos `useEffect` para **actualizar dinámicamente** el contenido en función del estado.
  - Separamos la lógica del botón en una función externa.

```mermaid
graph TB;
    Root -->|Renderiza el componente Saludo| ComponenteSaludo
    ComponenteSaludo -->|Muestra Hola {nombre}!| Pantalla
    ComponenteSaludo -->|Ejecuta useEffect -actualiza mensaje-| Estado
    Estado -->|Actualiza pantalla| Pantalla
    ComponenteSaludo -->|Botón clickeado| Contador
    Contador -->|useEffect detecta cambio| Estado
```

## **Componente con Props, Estado y `useEffect` (`app.tsx`)**

```tsx
import React, { useState, useEffect } from "react";

/**
 * Componente funcional que usa props, estado y efectos.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.nombre - Nombre del usuario.
 */
const Saludo: React.FC<{ nombre: string }> = ({ nombre }) => {
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("");

    // useEffect que se ejecuta cuando cambia el contador
    useEffect(() => {
        setMensaje(`Has hecho clic ${contador} veces.`);
    }, [contador]); // Solo se ejecuta cuando cambia "contador"

    // Función externa para manejar el incremento
    const incrementarContador = () => {
        setContador((prev) => prev + 1);
    };

    return (
        <div>
            <h1>¡Hola, {nombre}!</h1>
            <p>{mensaje}</p>
            <button onClick={incrementarContador}>Incrementar</button>
        </div>
    );
};

const App: React.FC = () => {
    return <Saludo nombre="Juan" />;
};

export default App;
```

## **Conceptos Clave**
A continuación, se explican cada uno de los conceptos nuevos con un ejemplo práctico.

### **Props en React**
Las `props` permiten pasar información de un componente padre a un componente hijo.

**Ejemplo:**
```tsx
const Mensaje: React.FC<{ texto: string }> = ({ texto }) => {
    return <p>{texto}</p>;
};

const App: React.FC = () => {
    return <Mensaje texto="¡Hola desde props!" />;
};
```


### **Estado con `useState`**
El hook `useState` nos permite manejar datos dentro de un componente.

**Ejemplo:**
```tsx
const Contador: React.FC = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
        </div>
    );
};
```

### **Efectos con `useEffect`**
El hook `useEffect` nos permite ejecutar código en ciertos momentos del ciclo de vida del componente.

**Ejemplo:**
```tsx
const MensajeDinamico: React.FC = () => {
    const [mensaje, setMensaje] = useState("Cargando...");

    useEffect(() => {
        setTimeout(() => {
            setMensaje("¡Mensaje actualizado!");
        }, 2000);
    }, []); // Se ejecuta solo una vez

    return <p>{mensaje}</p>;
};
```

### **Funciones en `onClick`**

Podemos manejar eventos con funciones externas para mejorar la organización del código.

**Ejemplo:**

```tsx
const Boton: React.FC = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador((prev) => prev + 1);
    };

    return (
        <button onClick={incrementar}>Clic {contador} veces</button>
    );
};
```

### **Conclusión**

**`useEffect` para actualizar datos en función del estado.**  
**Props (`nombre`) permiten enviar información al componente.**  
**`useState` almacena datos dinámicos y permite interactividad.**  
**Creamos una interacción con eventos (`onClick`) moviendo la lógica a una función externa.**  

---
