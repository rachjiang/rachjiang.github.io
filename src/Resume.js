import React, { useState } from 'react';


function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
      }

    return(
        <section id="resume" className="container mx-auto p-8 m-10">
            <h2 className="font-mono text-5xl font-bold">Here's a look at my previous Experience</h2>
        </section>
    )
}

export default Resume;