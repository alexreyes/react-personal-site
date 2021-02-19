 import { Pane, Tab } from 'evergreen-ui';

const NavBar = (props)  => {
    return(
        <Pane padding={16} className="NavBar">
            <Tab height={50} isSelected>Home</Tab>
            <Tab height={50}>About</Tab>
            <Tab height={50}>Books</Tab>
        </Pane>
    );
};

export default NavBar;  