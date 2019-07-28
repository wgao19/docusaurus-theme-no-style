/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';

function BlogPostPage(props) {
  const {content: BlogPostContents, metadata, nextItem, prevItem} = props;
  const {frontMatter} = BlogPostContents;
  return (
    <Layout title={metadata.title} description={metadata.description}>
      <main>
        {BlogPostContents && (
          <>
            <BlogPostItem frontMatter={frontMatter} metadata={metadata}>
              <BlogPostContents />
            </BlogPostItem>
            <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
          </>
        )}
      </main>
    </Layout>
  );
}

export default BlogPostPage;
