import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ProSidebar>
                    <Menu>
                        <MenuItem>
                            Admin AdminDashboard
                            <Link to="/admin" />
                        </MenuItem>

                        <MenuItem>
                            Add questions
                            <Link to="addQuestion" />
                        </MenuItem>

                        <MenuItem>
                            Edit questions
                            <Link to="admin" />
                        </MenuItem>


                        <MenuItem>
                            LogOut
                            <Link to="logout" />
                        </MenuItem>
                    </Menu>
                </ProSidebar>

            </div>
        );
    }
}

export default Sidebar;
