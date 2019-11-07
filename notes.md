# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## A good data model

- captures ALL of the info the the system needs
- captures ONLY the info the the system needs
- reflect reality (from the point of view of the system)
- flexible, can evolve with the system
- guarantees `data integrity`, without sacrificing too much performance
- is driven by the way we access data

# Components

- entities (words: zoo, animal, species), like a resource --> tables
- properties --> columns or fields
- relationships --> foreign keys (FK)

## Workflow

- identify entities
- identify relationships
- identify properties

## Relationships

- one to one
- one to many (most common)
- many to many

_there are many animals in one species_

## Mantras

- every table must have a **Primary Key**
- work on **two or three** entities at a time
- one to many relationships are modeled using a FK
- the **FK** always goes to the many side
- the **FK Column** must be the same type as the **Primary Key** it references 
- **many to many** relationships are modeled using a **third table**
- the third table could include other columns