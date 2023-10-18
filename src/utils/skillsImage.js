import html from "../assets/svg/skills/html.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import css from "../assets/svg/skills/css.svg";
import figma from "../assets/svg/skills/figma.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import chakraui from "../assets/svg/skills/chakraui.svg";
import react from "../assets/svg/skills/react.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import vue from "../assets/svg/skills/vue.svg";
import nuxtJS from "../assets/svg/skills/nuxtJS.svg";
import angular from "../assets/svg/skills/angular.svg";
import nodeJS from "../assets/svg/skills/nodeJS.svg";
import python from "../assets/svg/skills/python.svg";
import django from "../assets/svg/skills/django.svg";
import laravel from "../assets/svg/skills/laravel.svg";
import ruby from "../assets/svg/skills/ruby.svg";
import go from "../assets/svg/skills/go.svg";
import csharp from "../assets/svg/skills/csharp.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import php from "../assets/svg/skills/php.svg";
import wordpress from "../assets/svg/skills/wordpress.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import docker from "../assets/svg/skills/docker.svg";
import ubuntu from "../assets/svg/skills/ubuntu.svg";
import aws from "../assets/svg/skills/aws.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "css":
      return css;
    case "figma":
      return figma;
    case "bootstrap":
      return bootstrap;
    case "tailwindcss":
      return tailwind;
    case "materialui":
      return materialui;
    case "chakraui":
      return chakraui;
    case "react":
      return react;
    case "next js":
      return nextJS;
    case "vue js":
      return vue;
    case "nuxt js":
      return nuxtJS;
    case "angular":
      return angular;
    case "node js":
      return nodeJS;
    case "python":
      return python;
    case "django":
      return django;
    case "laravel":
      return laravel;
    case "ruby":
      return ruby;
    case "go":
      return go;
    case "c#":
      return csharp;
    case "graphql":
      return graphql;
    case "php":
      return php;
    case "wordpress":
      return wordpress;
    case "mongodb":
      return mongoDB;
    case "postgresql":
      return postgresql;
    case "mysql":
      return mysql;
    case "firebase":
      return firebase;
    case "docker":
      return docker;
    case "ubuntu":
      return ubuntu;
    case "aws":
      return aws;
    default:
      break;
  }
};
