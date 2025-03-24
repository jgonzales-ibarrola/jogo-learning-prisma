"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function PrivateLayout({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const pathSegments = pathname.split("/").filter((segment) => segment);

	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				<div className="flex items-center gap-5 p-4">
					<SidebarTrigger />
					<Breadcrumb>
						<BreadcrumbList>
							{pathSegments.map((segment, index) => {
								const href =
									"/" +
									pathSegments.slice(0, index + 1).join("/");
								const isLast =
									index === pathSegments.length - 1;

								return (
									<React.Fragment key={href}>
										<BreadcrumbSeparator />
										<BreadcrumbItem>
											{isLast ? (
												<BreadcrumbPage>
													{decodeURIComponent(
														segment
													)}
												</BreadcrumbPage>
											) : (
												<BreadcrumbLink href={href}>
													{decodeURIComponent(
														segment
													)}
												</BreadcrumbLink>
											)}
										</BreadcrumbItem>
									</React.Fragment>
								);
							})}
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				{children}
			</main>
		</SidebarProvider>
	);
}
