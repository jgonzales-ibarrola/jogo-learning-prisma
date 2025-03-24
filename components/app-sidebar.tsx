import {
	Calendar,
	ChevronRight,
	Home,
	Inbox,
	Search,
	Settings,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					{/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href={"/dashboard"}>
										<span>Dashboard</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>

							{/* Users */}
							<Collapsible
								defaultOpen
								className="group/collapsible"
							>
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton>
											<span>Users</span>
											<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											<SidebarMenuSubItem>
												<Link
													href={
														"/dashboard/users/employees"
													}
												>
													<span>Employees</span>
												</Link>
											</SidebarMenuSubItem>
											<SidebarMenuSubItem>
												<Link
													href={
														"/dashboard/users/suppliers"
													}
												>
													<span>Suppliers</span>
												</Link>
											</SidebarMenuSubItem>
											<SidebarMenuSubItem>
												<Link
													href={
														"/dashboard/users/visitors"
													}
												>
													<span>Visitors</span>
												</Link>
											</SidebarMenuSubItem>
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>

							{/* Logs */}
							<Collapsible
								defaultOpen
								className="group/collapsible"
							>
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton>
											<span>Logs</span>
											<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											<SidebarMenuSubItem>
												<Link
													href={
														"/dashboard/logs/employees"
													}
												>
													<span>Employees</span>
												</Link>
											</SidebarMenuSubItem>
											<SidebarMenuSubItem>
												<Link
													href={
														"/dashboard/logs/suppliers"
													}
												>
													<span>Suppliers</span>
												</Link>
											</SidebarMenuSubItem>
											<SidebarMenuSubItem>
												<Link
													href={
														"/dashboard/logs/visitors"
													}
												>
													<span>Visitors</span>
												</Link>
											</SidebarMenuSubItem>
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
