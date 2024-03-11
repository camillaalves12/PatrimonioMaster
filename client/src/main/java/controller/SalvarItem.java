package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


public class SalvarItem extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public SalvarItem() {
        super();

    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	   //doGet(request, response);
	    
	    String descricao = request.getParameter("descricao");
	    String numserie = request.getParameter("numserie");
	    String patrimonio = request.getParameter("patrimonio");
	    String secretaria = request.getParameter("secretaria");
	    String setor = request.getParameter("setor");
	    
	    PrintWriter saida = response.getWriter();
	    
	    saida.println("<!DOCTYPE html>");
	    saida.println("<html lang='pt-br'>");
	    saida.println("<head>");
	    saida.println("<meta charset='UTF-8'>");
	    saida.println("<title>Patrimonio master</title>");
	    saida.println("<link rel='stylesheet' href='style.css'>");
	    saida.println("</head>");
	    saida.println("<body>");
	    saida.println("<div class=\"page\">");
	    	saida.println("<div class=\"container\">");
			    saida.println("<h1>Dados do Item Cadastrado</h1>");
			    
			    	saida.println("<div class=\"divItens\">");
			    
			    		saida.println("Descrição: " + descricao + "<br>");
			    		saida.println("Número de série: " + numserie + "<br>");
				    	saida.println("Patrimônio: " + patrimonio + "<br>");
				    	saida.println("Secretaria: " + secretaria + "<br>");
				    	saida.println("Setor: " + setor + "<br>");
				    	
			    	saida.println("</div>");
		    	saida.println("</div>");
	    saida.println("</div>");
	    
	    saida.println("</body>");
	    saida.println("</html>");
	}


}
