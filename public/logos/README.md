# Logos de Tecnologías

Aquí puedes poner los logos reales de cada tecnología.

## Cómo usar:

1. **Descarga los logos** de cada tecnología (formato SVG recomendado)
2. **Renombra los archivos** según la estructura:
   - `nextjs.svg`
   - `react.svg`
   - `typescript.svg`
   - `javascript.svg`
   - `nodejs.svg`
   - `tailwind.svg`
   - `css3.svg`
   - `html5.svg`
   - `python.svg`
   - `sql.svg`
   - `mongodb.svg`
   - `git.svg`
   - `github.svg`
   - `figma.svg`

3. **En el componente** `Technologies.tsx`, cambia esta línea:
   ```tsx
   {/* Por ahora usa el emoji, pero puedes cambiar por: */}
   {/* <img src={tech.logoPath} alt={tech.name} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" /> */}
   {tech.icon}
   ```

   Por esta:
   ```tsx
   <img src={tech.logoPath} alt={tech.name} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
   ```

## Sitios recomendados para logos:
- **Simple Icons**: https://simpleicons.org/
- **SVG Repo**: https://www.svgrepo.com/
- **Heroicons**: https://heroicons.com/
- **Feather Icons**: https://feathericons.com/

## Tamaños recomendados:
- **Móvil**: 48x48px (w-12 h-12)
- **Tablet**: 64x64px (w-16 h-16)  
- **Desktop**: 80x80px (w-20 lg:w-20)
