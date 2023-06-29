const customComponents = require.context('@example-mara/components/mara-components/custom', true, /\/index.vue$/)
type RequireContextType = typeof customComponents

const getComponentsMapper = (customComponents: RequireContextType) => {
  return customComponents.keys().reduce((acc: any, filename: string) => {
    const [, componentName] = filename.match(/\/(.*?)\/index.vue$/) as RegExpMatchArray

    if (!/\//.test(componentName)) {
      const componentModule = customComponents(filename)
      acc[`${componentName}`] = componentModule.default || componentModule
    }
    return acc
  }, {} as any)
}

export const MaraComponentsMapper = getComponentsMapper(customComponents)
