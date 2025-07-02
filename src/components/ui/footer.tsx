import { Instagram } from "@/components/ui/instagram";

export function Footer({today}: {today: Date}) {
    return (<footer className="flex flex-col items-center py-2 bg-wine text-sm text-lyellow">
        &copy; 2025 - {today.getFullYear()} Carolina Machado. Todos os direitos reservados.
    </footer>);
}
