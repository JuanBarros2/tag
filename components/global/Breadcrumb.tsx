import React from "react";
import {
  Breadcrumb as BreadcrumbChakra,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Breadcrumb() {
  const { pathname } = useRouter();
  const isChildPath = pathname !== "/";
  return (
    <BreadcrumbChakra>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/" isCurrentPage={!isChildPath}>
          <Text
            color="cyan.700"
            sx={{
              fontWeight: !isChildPath ? "bold" : "",
            }}
          >
            Home
          </Text>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {isChildPath && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="cyan.700">
            <Text
              color="cyan.700"
              sx={{
                fontWeight: isChildPath ? "bold" : "",
              }}
            >
              Livro
            </Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </BreadcrumbChakra>
  );
}
