import styles from '../styles/Home.module.css'
import { JSONContent } from "@tiptap/core";
import { generateHTML } from "@tiptap/html";
import React, { useMemo } from 'react'
const Renderer = require("prosemirror-to-html-js").Renderer;
import { richTextProfile } from "../../lib/richTextConfiguration";
//const a = = require("prosemirror-to-html-js").

type Props = {
   descriptionrt: JSONContent,
}

const ReleaseNotesDescriptionComponentRt = ({descriptionrt}: Props) => {
    const renderer = new Renderer();
    const output = generateHTML(descriptionrt,[richTextProfile]);
     
    return(
            <div dangerouslySetInnerHTML={{ __html: output }} />

    )
}

export default ReleaseNotesDescriptionComponentRt