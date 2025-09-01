# 🚀 Portfolio de Luca

Un portfolio moderno y interactivo construido con las últimas tecnologías web, demostrando el poder de WebGL, animaciones fluidas y diseño minimalista.

## ✨ Características

- **Fondo WebGL**: Partículas 3D interactivas que crean un ambiente inmersivo
- **Animaciones fluidas**: Transiciones suaves y efectos de entrada con Framer Motion
- **Diseño minimalista**: Paleta en blanco y negro con tipografía elegante
- **Responsive**: Optimizado para todos los dispositivos
- **Performance**: Optimizado con Next.js 15 y Tailwind CSS 4

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework React con SSR/SSG
- **Tailwind CSS 4** - Framework CSS utility-first
- **Three.js + React Three Fiber** - Gráficos 3D en el navegador
- **Framer Motion** - Animaciones fluidas en React
- **TypeScript** - Tipado estático para mayor robustez

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Instala las dependencias adicionales**
   ```bash
   npm install framer-motion
   ```

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre [http://localhost:3000](http://localhost:3000) en tu navegador**

## 📁 Estructura del Proyecto

```
app/
├── components/          # Componentes reutilizables
│   ├── Hero.tsx        # Sección principal con tu nombre
│   ├── ParticleBackground.tsx  # Fondo de partículas 3D
│   └── WebGLBackground.tsx     # Canvas WebGL principal
├── globals.css         # Estilos globales
├── layout.tsx          # Layout principal de la aplicación
└── page.tsx            # Página de inicio
```

## 🎨 Personalización

### Cambiar el nombre
Edita `app/components/Hero.tsx` y cambia "Luca" por tu nombre.

### Modificar colores
Los colores principales están definidos en `app/globals.css` en las variables CSS.

### Ajustar partículas
Modifica `app/components/ParticleBackground.tsx` para cambiar el comportamiento de las partículas.

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificar código con ESLint

## 📱 Responsive Design

El portfolio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Deploy automático en cada push

### Otros servicios
- **Netlify**: Compatible con Next.js
- **Railway**: Deploy rápido y escalable
- **DigitalOcean App Platform**: Para proyectos más complejos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Luca** - [tu-email@ejemplo.com]
- **GitHub**: [@tu-usuario]
- **LinkedIn**: [tu-perfil]

---

⭐ Si te gusta este portfolio, dale una estrella en GitHub!
