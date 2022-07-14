import B_Dropdown from 'react-bootstrap/Dropdown';

export const Dropdown = () => {
  return (
    <B_Dropdown>
      <B_Dropdown.Toggle variant="success" id="B_Dropdown-basic">
        Write a Post
      </B_Dropdown.Toggle>

      <B_Dropdown.Menu>
        <B_Dropdown.Item href="#/action-1">Action</B_Dropdown.Item>
        <B_Dropdown.Item href="#/action-2">Another action</B_Dropdown.Item>
        <B_Dropdown.Item href="#/action-3">Something else</B_Dropdown.Item>
      </B_Dropdown.Menu>
    </B_Dropdown>
  );
}