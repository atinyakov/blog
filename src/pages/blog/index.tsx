import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle='My Blog Posts'>
            <p>My cool posts will go in here</p>

            <ul>
                {data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <Link to={node.slug}>
                            <h2>{node.frontmatter.title}</h2>
                        </Link>
                        <p>Posted: {node.frontmatter.date}</p>
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
                slug
            }
        }
    }
`;

export default BlogPage;
