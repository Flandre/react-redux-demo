import FilterLink from "../container/FilterLink"

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {","}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {","}
    <FilterLink filter="SHOW_COMPLETED">
      completed
    </FilterLink>
  </p>
)