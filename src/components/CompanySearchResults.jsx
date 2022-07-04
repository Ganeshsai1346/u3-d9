/** @format */

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import JobResult from "./JobResult";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?company=";

  const getJobs = async () => {
    const response = await fetch(baseEndpoint + params.companyName);
    const { data } = await response.json();
    setJobs(data);
  };

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <JobResult key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
