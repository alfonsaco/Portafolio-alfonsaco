// Archivo para especificar tipos de archivos a TS, al importar componentes y que no de error de 'Could not find a declataration file, implicit has any type'
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}