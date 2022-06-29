import React from "react";
import Layout from "../../components/Layout";

function AllBooksPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Library</h1>
        <div className="mt-8">All Books</div>
      </div>
    </Layout>
  );
}

export default AllBooksPage;
