import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle='My Blog Posts'>
            <p>My cool posts will go in here</p>

            <ul>
                {data.allFile.nodes.map((node) => (
                    <li key={node.name}>{node.name}</li>
                ))}
            </ul>
        </Layout>
    );
};

export const querry = graphql`
    query blog {
        allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
            nodes {
                name
            }
        }
    }
`;

export default BlogPage;
