import { PerfilList } from "@/components/perfil-page/perfil-list/PerfilList";
import { PerfilCard } from "@/components/perfil-page/PerfilCard";

export default function PerfilPage(){
    return(
        <PerfilCard>
            <PerfilList/>
        </PerfilCard>
    );
}