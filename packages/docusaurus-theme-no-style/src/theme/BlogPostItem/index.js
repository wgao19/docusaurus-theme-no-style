/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {MDXProvider} from '@mdx-js/react';

import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';

function BlogPostItem(props) {
  const {children, frontMatter, metadata, truncated} = props;
  const {date, permalink, tags} = metadata;
  const {author, authorURL, authorTitle, authorFBID, title} = frontMatter;

  const renderPostHeader = () => {
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ][parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    const authorImageURL = authorFBID
      ? `https://graph.facebook.com/${authorFBID}/picture/?height=200&width=200`
      : frontMatter.authorImageURL;

    return (
      <section>
        <h1>
          <Link to={permalink}>{title}</Link>
        </h1>
        <small>
          {month} {day}, {year}
        </small>
        {authorImageURL && (
          <a
            className="avatar__photo-link"
            href={authorURL}
            target="_blank"
            rel="noreferrer noopener">
            <img role="avatar" src={authorImageURL} alt={author} />
          </a>
        )}
        {author && (
          <>
            <h4 className="avatar__name">
              <a href={authorURL} target="_blank" rel="noreferrer noopener">
                {author}
              </a>
            </h4>
            <small className="avatar__subtitle">{authorTitle}</small>
          </>
        )}
      </section>
    );
  };

  return (
    <article>
      {renderPostHeader()}
      <section>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </section>
      <section>
        {tags.length > 0 && (
          <p>
            <strong>Tags:</strong>
            {tags.map(({label, permalink: tagPermalink}) => (
              <Link key={tagPermalink} to={tagPermalink} role="tag">
                {label}
              </Link>
            ))}
          </p>
        )}
      </section>
      {truncated && (
        <Link to={metadata.permalink}>
          <strong>Read More</strong>
        </Link>
      )}
    </article>
  );
}

export default BlogPostItem;
