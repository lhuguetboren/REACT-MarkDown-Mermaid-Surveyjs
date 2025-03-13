# ESLint en React

ESLint es una herramienta que nos ayuda a **detectar errores** y **mantener un código limpio** en aplicaciones JavaScript y TypeScript. En este apartado, aprenderemos:

- **Qué es ESLint y por qué es importante.**
- **Cómo instalar y configurar ESLint en un proyecto React.**
- **Cómo usar ESLint para mejorar la calidad del código.**

## **¿Qué es ESLint y por qué usarlo?**

**ESLint** es un **linter** para JavaScript y TypeScript que analiza el código en busca de:
**Errores de sintaxis y problemas comunes.**  
**Malas prácticas o código obsoleto.**  
**Inconsistencias en el formato del código (indentación, espacios, comillas).**  

**Ejemplo de código sin ESLint (mala práctica)**:

```tsx
function Saludar(props){
return <h1>Hola {props.nombre}</h1>}
```

**Problemas detectados por ESLint:**
❌ Falta de espacios adecuados.  
❌ `props` no está tipado correctamente.  
❌ Falta de indentación adecuada.

**Código corregido con ESLint**:

```tsx
const Saludar: React.FC<{ nombre: string }> = ({ nombre }) => {
    return <h1>Hola {nombre}</h1>;
};
```
Código más limpio y legible.  
Mejores prácticas garantizadas.

## **Instalación de ESLint en un Proyecto React con TypeScript**
Si tienes un proyecto con **Vite o Create React App**, puedes instalar ESLint fácilmente:

**Paso 1: Instalar ESLint en el proyecto**
```bash
npm install eslint --save-dev
```

**Paso 2: Inicializar ESLint**

```bash
npx eslint --init
```

🔹 Responde a las preguntas de configuración:  

- **¿Cómo quieres usar ESLint?** → "Para verificar errores de sintaxis y encontrar problemas".  
- **¿Qué tipo de módulo usas?** → "ESModules".  
- **¿Qué framework usas?** → "React".  
- **¿Qué formato de configuración prefieres?** → "JSON" o "JavaScript".  

## **Configuración Básica de `.eslintrc.js`**

Después de inicializar ESLint, el archivo de configuración `.eslintrc.js` se verá así:

```js
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react/prop-types": "off",
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    }
};
```

**Explicación de las reglas:**  
`"eslint:recommended"` → Activa las reglas recomendadas de ESLint.  
`"plugin:react/recommended"` → Activa reglas específicas para React.  
`"plugin:@typescript-eslint/recommended"` → Reglas para TypeScript.  
`"quotes": ["error", "double"]` → Obliga a usar comillas dobles.  
`"semi": ["error", "always"]` → Requiere punto y coma al final de las líneas.  

## **Ejecutar ESLint en el Proyecto**
Para analizar el código, ejecuta:

```bash
npx eslint src --fix
```

**Esto revisará el código y corregirá automáticamente errores menores**.

**Ejemplo de error corregido por ESLint**:

```tsx
// Código con error
const suma = (a, b) => a+b

// Código corregido automáticamente
const suma = (a, b) => a + b;
```

## **Integración con Prettier (Opcional)**

Si quieres que ESLint **corrija errores de formato automáticamente**, combina ESLint con Prettier.

**Instalar Prettier y su plugin para ESLint**

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

**Actualizar `.eslintrc.js` para incluir Prettier**

```js
extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
]
```

**Ejecutar ESLint con Prettier**

```bash
npx eslint src --fix
```

Ahora ESLint corregirá código y aplicará formato automáticamente.

## **ESLint en VSCode**

Para usar ESLint en **Visual Studio Code**:
- Instala la extensión **ESLint** desde el Marketplace.  
- Agrega `"editor.codeActionsOnSave": { "source.fixAll.eslint": true }` en **settings.json** para corregir automáticamente al guardar.  

**Corrección automática en cada guardado:**

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

## **Conclusión**

**ESLint ayuda a detectar errores y mejorar el código.**  
**Podemos configurarlo para seguir reglas específicas.**  
**Funciona con React y TypeScript sin problemas.**  
**Se puede integrar con Prettier para formato automático.**  

---
