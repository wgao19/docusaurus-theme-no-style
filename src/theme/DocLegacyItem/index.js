/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Head from '@docusaurus/Head';
import DocLegacyPaginator from '@theme/DocLegacyPaginator';

function Headings({headings, isChild}) {
  if (!headings.length) return null;
  return (
    <ul>
      {headings.map(heading => (
        <li key={heading.id}>
          <a href={`#${heading.id}`}>{heading.value}</a>
          <Headings isChild headings={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function DocLegacyItem(props) {
  const {metadata, content: DocContent, docsMetadata} = props;

  return (
    <>
      <main>
        <Head>
          {metadata && metadata.title && <title>{metadata.title}</title>}
        </Head>
        <article>
          <h1>{metadata.title}</h1>
          <DocContent />
        </article>
        <DocLegacyPaginator docsMetadata={docsMetadata} metadata={metadata} />
      </main>
      {DocContent.rightToc && (
        <aside>
          <Headings headings={DocContent.rightToc} />
        </aside>
      )}
    </>
  );
}

export default DocLegacyItem;
