# Depuración en React

Depurar una aplicación React es clave para detectar errores y mejorar el rendimiento. En este apartado, exploraremos herramientas y técnicas esenciales para **debuggear una aplicación React** de manera eficiente.

## **React Developer Tools (React DevTools)**

**Extensión para Chrome y Firefox** que permite inspeccionar componentes React, revisar su estado y props en tiempo real.

**Instalación:**  
🔗 Descarga desde [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools)  

**Uso:**
1. Abre las **herramientas de desarrollo** (`F12` o `Ctrl + Shift + I` en Chrome).
2. Ve a la pestaña **"Components"** para inspeccionar los componentes React.
3. Ve a la pestaña **"Profiler"** para analizar el rendimiento.

**Ejemplo de inspección de estado en DevTools**  

```tsx

const [contador, setContador] = useState(0);

```

Puedes modificar el valor del `contador` directamente en DevTools para ver cambios en la UI.

## **Consola de JavaScript (`console.log`)**

El método más simple y efectivo para depurar valores y flujos en React.

**Ejemplo:**

```tsx
const handleClick = () => {
    console.log("Botón clickeado");
    setContador(contador + 1);
};
```

**Útil para:**

- Ver valores de variables en diferentes momentos.  
- Detectar si un evento o función se ejecuta correctamente.  

**Ejemplo para depurar `useEffect`:**

```tsx
useEffect(() => {
    console.log("El efecto se ejecutó con estado:", estado);
}, [estado]);
```

## **Depuración con `debugger` en JavaScript**

El comando `debugger` permite pausar la ejecución del código y analizar variables en la consola del navegador.

**Ejemplo:**

```tsx
const handleClick = () => {
    debugger; // La ejecución se detendrá aquí
    setContador(contador + 1);
};
```

**Paso a paso en DevTools:**  
1. Abre la consola (`F12` en Chrome).  
2. Ejecuta el código y cuando `debugger` se ejecute, la ejecución se detendrá.  
3. Inspecciona variables y estado en el panel "Sources".

## **React StrictMode y Advertencias en Consola**

React `StrictMode` ayuda a detectar problemas potenciales mostrando advertencias en la consola.

**Ejemplo en `main.tsx`:**

```tsx
<React.StrictMode>
    <App />
</React.StrictMode>
```

**Detecta:**

- Renderizados innecesarios.  
- Métodos obsoletos.  
- Errores en efectos secundarios (`useEffect`).  

## **Manejo de Errores con `try/catch` y `Error Boundaries`**

Si una API falla o hay un error inesperado en un componente, podemos capturarlo y evitar que toda la app se rompa.

**Ejemplo: Capturar errores en un `fetch`**

```tsx
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://api.example.com/data");
            if (!response.ok) throw new Error("Error en la API");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Fallo en la carga de datos:", error);
        }
    };

    fetchData();
}, []);
```

**Ejemplo: Error Boundary en React**

```tsx
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h2>¡Algo salió mal!</h2>;
        }
        return this.props.children;
    }
}

// Uso:
<ErrorBoundary>
    <App />
</ErrorBoundary>
```

**Evita que un error rompa toda la aplicación.**

---

