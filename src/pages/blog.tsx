import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle='My Blog Posts'>
            <p>My cool posts will go in here</p>

            <ul>
                {data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>{node.body}</MDXRenderer>
                    </article>
                ))}
            </ul>
        </Layout>
    );
};

export const querry = graphql`
    query BlogQuerry {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "D MMMM,YYYY")
                    title
                }
                id
                body
            }
        }
    }
`;

export default BlogPage;
