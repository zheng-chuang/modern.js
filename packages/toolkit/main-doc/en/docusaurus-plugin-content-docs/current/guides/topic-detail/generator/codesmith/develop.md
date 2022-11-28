---
sidebar_position: 3
---

# Develop a microgenerator project

## Create project

Modern.js provides a microgenerator to create a microgenerator project, you can directly create a microgenerator project with the following commands:

```bash
$ mkdir <projectDir>
$ npx @modern-js/codesmith-cli @modern-js/generator-generator

? Package Name <generatorName>
? Package Management Tool pnpm
? Development Language TS
```

## Add template file

In the templates folder of the project directory, it is used to store the template files required by the generator. If there is no template file, this step can be skipped.

## Develop generator core logic

In the project generated by default, it has been implemented to directly copy the templates directory file to the target project, and the core logic development of the generator can be completed directly in the `handleTemplateFile` function.

## Test microgenerator

After the development of the microgenerator is completed, you need to execute `pnpm run build` to compile the code. In development mode, you can use `pnpm run build --watch`.

Codesmith provides the cli tool for running and testing the microgenerator. Execute it in the target directory with the following command:

```bash
npx @modern-js/codesmith-cli <generatorPath>
```

Where `generatorPath` is the absolute path of the above generator project.

## Run the microgenerator

After the generator publishes to npm, use the following command to execute:

```bash
npx @modern-js/codesmith-cli <generatorName>
```

Where generatorName is the generator package name.

:::info
`@modern-js/create` also supports running micro-generators, you can use `npx @modern-js/create --generator <generatorName>` to run customized micro-generators.
:::