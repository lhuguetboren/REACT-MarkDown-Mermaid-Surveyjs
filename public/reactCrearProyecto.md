
# Crear un Proyecto

<details>
<summary>Crear el proyecto con **Vite** es más rápido y ligero.</summary>
<b>¿Por qué utilizamos Vite para trabajar con React</b> 

Vite es una herramienta de construcción moderna que ofrece varias ventajas sobre otras soluciones como Create React App (CRA). Porque

1. **🚀 Inicio ultrarrápido**  
   - Usa **ES Modules** para cargar solo los archivos necesarios, lo que hace que el desarrollo sea mucho más rápido.
2. **⚡ Hot Module Replacement (HMR) instantáneo**  
   - Los cambios en el código se reflejan casi **al instante**, sin necesidad de recargar toda la aplicación.
3. **📦 Compilación más rápida**  
   - Utiliza **esbuild**, un compilador escrito en Go que es mucho más rápido que Webpack.
4. **🛠️ Configuración simplificada**  
   - Con pocos comandos tienes un entorno listo para React con TypeScript sin configuración extra.
5. **🔌 Soporte para múltiples frameworks**  
   - Vite no solo funciona con React, sino también con Vue, Svelte y otros frameworks modernos.

### **Referencias oficiales 📚**
🔗 **Vite**: [https://vitejs.dev/](https://vitejs.dev/)  
</details>


**Comando para crear un nuevo proyecto con Vite:**

```sh
npm create vite@latest nombre-del-proyecto --template react
````

```
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Angular
    Others

✔ Select a framework: › React
? Select a variant: › - Use arrow-keys. Return to submit.
❯   TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC
    React Router v7 ↗
```

Reemplaza `nombre-del-proyecto` con el nombre que desees.

**Pasos**

- **Entrar en la carpeta del proyecto:**

```sh
cd nombre-del-proyecto
```

- **Instalar dependencias:**

```sh
npm install
```

- **Ejecutar el Servidor de Desarrollo**

Para ver la aplicación en el navegador, ejecuta:

```sh
npm run dev
```

Luego abre en el navegador la URL que aparece (por defecto `http://localhost:5173/`).

**Estructura del Proyecto**

Después de crear el proyecto, verás una estructura como esta:

📂 nombre-del-proyecto

 ├── 📂 node_modules      # Paquetes instalados

 ├── 📂 public            # Archivos estáticos

 ├── 📂 src               # Código fuente
        ├── App.tsx          # Componente principal

        ├── main.tsx         # Punto de entrada

        ├── index.css        # Estilos globales

 ├── .gitignore           # Archivos ignorados por Git

 ├── package.json         # Configuración del proyecto

 ├── vite.config.js       # Configuración de Vite

**Agregar Estilos**

Puedes editar **`src/index.css`** o crear archivos CSS separados y usarlos en los componentes.

Ejemplo en `App.jsx`:

```jsx
import "./App.css";

export default function App() {
  return <h1 className="titulo">¡Hola, React con Vite!</h1>;
}
```

Y en `App.css`:

```css
.titulo {
  color: blue;
  text-align: center;
}
```

**Agregar Bootstrap o Tailwind (Opcional)**

Si quieres usar estilos predefinidos:

- **Bootstrap:**

```sh
npm install bootstrap
```

Luego impórtalo en `main.jsx`:

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
```

- **Tailwind CSS:**  

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configura `tailwind.config.js` y usa sus clases en los componentes.

---
