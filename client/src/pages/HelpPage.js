import React from "react";
import { Accordion, Card } from "react-bootstrap";

const HelpPage = () => {
  return (
    <>
      <div>
        <h1 className="text-center">FAQ</h1>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Question 1
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Lorem ipsum dolor sit amet, eu mea feugait qualisque, nostrud
                principes dissentias ei sit. No essent nostrum his. Nemore
                commodo euripidis pri te, et quo quem quaerendum. Quo natum
                sonet similique id, cum impetus graecis nominati ne. Eu mazim
                malorum scaevola quo. Nisl facilisi intellegat nec in, illud
                impedit epicuri mei no. Ad audiam quaeque has, quo an alii
                viris. Eum ne vocibus appareat instructior, vis dicit expetendis
                no. Ad vidisse iuvaret urbanitas mel, mei eruditi labores
                laboramus no, nec id aeque corpora. Soluta graeco verear ne vel,
                an vix menandri mandamus, in oblique tractatos vix.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Question 2
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {" "}
                Lorem ipsum dolor sit amet, eu mea feugait qualisque, nostrud
                principes dissentias ei sit. No essent nostrum his. Nemore
                commodo euripidis pri te, et quo quem quaerendum. Quo natum
                sonet similique id, cum impetus graecis nominati ne. Eu mazim
                malorum scaevola quo. Nisl facilisi intellegat nec in, illud
                impedit epicuri mei no. Ad audiam quaeque has, quo an alii
                viris. Eum ne vocibus appareat instructior, vis dicit expetendis
                no. Ad vidisse iuvaret urbanitas mel, mei eruditi labores
                laboramus no, nec id aeque corpora. Soluta graeco verear ne vel,
                an vix menandri mandamus, in oblique tractatos vix.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Question 3
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="2">
              <Card.Body>
                {" "}
                Lorem ipsum dolor sit amet, eu mea feugait qualisque, nostrud
                principes dissentias ei sit. No essent nostrum his. Nemore
                commodo euripidis pri te, et quo quem quaerendum. Quo natum
                sonet similique id, cum impetus graecis nominati ne. Eu mazim
                malorum scaevola quo. Nisl facilisi intellegat nec in, illud
                impedit epicuri mei no. Ad audiam quaeque has, quo an alii
                viris. Eum ne vocibus appareat instructior, vis dicit expetendis
                no. Ad vidisse iuvaret urbanitas mel, mei eruditi labores
                laboramus no, nec id aeque corpora. Soluta graeco verear ne vel,
                an vix menandri mandamus, in oblique tractatos vix.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Question 4
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="3">
              <Card.Body>
                {" "}
                Lorem ipsum dolor sit amet, eu mea feugait qualisque, nostrud
                principes dissentias ei sit. No essent nostrum his. Nemore
                commodo euripidis pri te, et quo quem quaerendum. Quo natum
                sonet similique id, cum impetus graecis nominati ne. Eu mazim
                malorum scaevola quo. Nisl facilisi intellegat nec in, illud
                impedit epicuri mei no. Ad audiam quaeque has, quo an alii
                viris. Eum ne vocibus appareat instructior, vis dicit expetendis
                no. Ad vidisse iuvaret urbanitas mel, mei eruditi labores
                laboramus no, nec id aeque corpora. Soluta graeco verear ne vel,
                an vix menandri mandamus, in oblique tractatos vix.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Question 5
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="4">
              <Card.Body>
                {" "}
                Lorem ipsum dolor sit amet, eu mea feugait qualisque, nostrud
                principes dissentias ei sit. No essent nostrum his. Nemore
                commodo euripidis pri te, et quo quem quaerendum. Quo natum
                sonet similique id, cum impetus graecis nominati ne. Eu mazim
                malorum scaevola quo. Nisl facilisi intellegat nec in, illud
                impedit epicuri mei no. Ad audiam quaeque has, quo an alii
                viris. Eum ne vocibus appareat instructior, vis dicit expetendis
                no. Ad vidisse iuvaret urbanitas mel, mei eruditi labores
                laboramus no, nec id aeque corpora. Soluta graeco verear ne vel,
                an vix menandri mandamus, in oblique tractatos vix.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  );
};

export default HelpPage;
